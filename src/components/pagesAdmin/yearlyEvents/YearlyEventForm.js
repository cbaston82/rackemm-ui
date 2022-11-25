import { differenceInDays, formatDistance, subDays } from 'date-fns'
import { MoonLoader } from 'react-spinners'
import { FaRegSave } from 'react-icons/fa'
import { cleanPublicImageName, formatPhoneNumber } from '../../../helpers'
import BreadCrumbs from '../../BreadCrumbs'

function YearlyEventForm({
    handleFormValueChange,
    handleFormSubmit,
    editEvent,
    loading,
    userMedia,
}) {
    return (
        <>
            <BreadCrumbs
                previousLinks={[
                    { path: '/account/yearly-events', name: 'Dashboard Yearly Events' },
                ]}
                activeBreadcrumbTitle="Create Yearly Event"
            />
            <div className="card rounded-0 rackemm-card-grid-form">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <span className="text-black-50"> Create an event</span>
                        <div>
                            {editEvent.status === 'active' ? (
                                <span className="badge bg-success">active</span>
                            ) : (
                                <span className="badge bg-warning">inactive</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {loading ? (
                        <div className="d-flex justify-content-center align-content-center">
                            <MoonLoader size={150} loading />
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="grid-form">
                            <div className="row gx-3 mb-3">
                                <fieldset>
                                    <legend>Tournament Details</legend>
                                    <div data-row-span="2">
                                        <div data-field-span="1">
                                            <label>
                                                Title{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="title"
                                                value={editEvent.title}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label>Poster </label>
                                            <select
                                                className="form-control rounded-0"
                                                onChange={(e) => handleFormValueChange(e)}
                                                name="posterImage"
                                                value={editEvent.posterImage}
                                            >
                                                <option value="">Choose...</option>
                                                {userMedia.media.map((image) => (
                                                    <option key={image.id} value={image.secureUrl}>
                                                        {cleanPublicImageName(image.publicId)}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div data-row-span="1">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="description">
                                                Description{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <textarea
                                                onChange={(e) => handleFormValueChange(e)}
                                                name="description"
                                                value={editEvent.description}
                                            />
                                        </div>
                                    </div>

                                    <div data-row-span="1">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="description">
                                                Bracket
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                name="bracket"
                                                type="text"
                                                value={editEvent.bracket}
                                            />
                                        </div>
                                    </div>
                                    <div data-row-span="3">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="startTime">
                                                Start{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="datetime-local"
                                                name="startTime"
                                                value={editEvent.startTime}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="endTime">
                                                End <span className="text-danger fw-bolder">*</span>
                                                <span className="fw-light text-lowercase fw-bolder text-danger">
                                                    Choose 11:59 PM if all day event
                                                </span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="datetime-local"
                                                name="endTime"
                                                value={editEvent.endTime}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label>
                                                Buy-in{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="number"
                                                name="buyIn"
                                                value={editEvent.buyIn}
                                            />
                                        </div>
                                    </div>
                                    <div data-row-span="3">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="ratingSystem">
                                                Rating system{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="ratingSystem"
                                                value={editEvent.ratingSystem}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="game">
                                                Game Type{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <select
                                                value={editEvent.game}
                                                name="game"
                                                onChange={(e) => handleFormValueChange(e)}
                                                className="form-control rounded-0"
                                            >
                                                <option value="">Choose...</option>
                                                <option value="8-ball">8-Ball</option>
                                                <option value="9-ball">9-Ball</option>
                                                <option value="10-ball">10-Ball</option>
                                            </select>
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="status">
                                                Status{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <select
                                                value={editEvent.status}
                                                name="status"
                                                onChange={(e) => handleFormValueChange(e)}
                                                className="form-control rounded-0"
                                            >
                                                <option value="">Choose...</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="mt-5" />
                                <fieldset>
                                    <legend>Point of Contact Info</legend>
                                    <div data-row-span="2">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="pointOfContact">
                                                Point of contact{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="pointOfContact"
                                                value={editEvent.pointOfContact}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label
                                                className="small mb-1"
                                                htmlFor="pointOfContactPhone"
                                            >
                                                Point of contact phone{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="pointOfContactPhone"
                                                value={editEvent.pointOfContactPhone}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="mt-5" />
                                <fieldset>
                                    <legend>Venue Info</legend>
                                    <div data-row-span="2">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="venue">
                                                Venue{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                id="autocomplete"
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="venue"
                                                value={editEvent.venue}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="phoneNumber">
                                                Phone{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="phoneNumber"
                                                value={formatPhoneNumber(editEvent.phoneNumber)}
                                            />
                                        </div>
                                    </div>
                                    <div data-row-span="4">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="address">
                                                Address{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="address"
                                                value={editEvent.address}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="city">
                                                City{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="city"
                                                value={editEvent.city}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="state">
                                                State{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="state"
                                                value={editEvent.state}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="zipCode">
                                                Zip code{' '}
                                                <span className="text-danger fw-bolder">*</span>
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="zipCode"
                                                value={editEvent.zipCode}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-success rounded-0 mt-3"
                                        type="submit"
                                    >
                                        <FaRegSave /> Save
                                    </button>
                                </fieldset>
                            </div>
                        </form>
                    )}
                </div>
                <div className="card-footer">
                    <span className="text-black-50">Created </span>
                    <span className="fst-italic text-black-50">
                        {editEvent.createdAt &&
                            formatDistance(
                                subDays(
                                    new Date(),
                                    differenceInDays(new Date(editEvent.createdAt), new Date()),
                                ),
                                new Date(),
                                {
                                    addSuffix: true,
                                },
                            )}
                    </span>
                </div>
            </div>
        </>
    )
}

export default YearlyEventForm
