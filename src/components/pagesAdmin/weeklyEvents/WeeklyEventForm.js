import { differenceInDays, formatDistance, subDays } from 'date-fns'
import { Link } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'

function WeeklyEventForm({
    handleFormValueChange,
    handleFormSubmit,
    editEvent,
    loading,
    pageRequest,
}) {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/account/Weekly-events">Account Weekly Events</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {pageRequest}
                    </li>
                </ol>
            </nav>
            <div className="card" id="form">
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
                            <MoonLoader size={150} loading={true} />
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="grid-form">
                            <div className="row gx-3 mb-3">
                                <fieldset>
                                    <div data-row-span="1">
                                        <div data-field-span="1">
                                            <label>Title *</label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="title"
                                                value={editEvent.title}
                                            />
                                        </div>
                                    </div>

                                    <div data-row-span="1">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="description">
                                                Description *
                                            </label>
                                            <textarea
                                                onChange={(e) => handleFormValueChange(e)}
                                                name="description"
                                                value={editEvent.description}
                                            />
                                        </div>
                                    </div>

                                    <div data-row-span="2">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="venue">
                                                Venue *
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="venue"
                                                value={editEvent.venue}
                                            />
                                        </div>
                                        <div data-field-span="1">
                                            <label>Buy-in *</label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="number"
                                                name="buyIn"
                                                value={editEvent.buyIn}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div data-row-span="2">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="pointOfContact">
                                                Point of contact *
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
                                                Point of contact phone *
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
                                <fieldset>
                                    <div data-row-span="3">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="day">
                                                Day *
                                            </label>
                                            <select
                                                value={editEvent.day}
                                                name="day"
                                                onChange={(e) => handleFormValueChange(e)}
                                            >
                                                <option value="">-- Choose a day --</option>
                                                <option value="Sunday">Sunday</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                            </select>
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="startTime">
                                                Start time *
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="time"
                                                name="startTime"
                                                value={editEvent.startTime}
                                            />
                                        </div>
                                    </div>
                                    <div data-row-span="4">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="address">
                                                Address *
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
                                                City *
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
                                                State *
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
                                                Zip code *
                                            </label>
                                            <input
                                                onChange={(e) => handleFormValueChange(e)}
                                                type="text"
                                                name="zipCode"
                                                value={editEvent.zipCode}
                                            />
                                        </div>
                                    </div>
                                    <div data-row-span="3">
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="ratingSystem">
                                                Rating system *
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
                                                Game Type *
                                            </label>
                                            <select
                                                value={editEvent.game}
                                                name="game"
                                                onChange={(e) => handleFormValueChange(e)}
                                            >
                                                <option value="">-- Choose Game--</option>
                                                <option value="8-ball">8-Ball</option>
                                                <option value="9-ball">9-Ball</option>
                                                <option value="10-ball">10-Ball</option>
                                            </select>
                                        </div>
                                        <div data-field-span="1">
                                            <label className="small mb-1" htmlFor="status">
                                                Status *
                                            </label>
                                            <select
                                                value={editEvent.status}
                                                name="status"
                                                onChange={(e) => handleFormValueChange(e)}
                                            >
                                                <option value="">-- Choose Type--</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-outline-secondary mt-3"
                                        type="submit"
                                    >
                                        Save
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

export default WeeklyEventForm
