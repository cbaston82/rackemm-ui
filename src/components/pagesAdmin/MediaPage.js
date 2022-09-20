import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FaTrash, FaUpload, FaImage } from 'react-icons/fa'
import CustomLoader from '../pagesPublic/tables/CustomeLoader'
import { uploadUserMedia, getUserMedia, deleteUserMedia } from '../../redux'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { allowedFileTypeUploads, cleanFileName } from '../../helpers'

function MediaPage({ userMedia, uploadUserMedia, getUserMedia, deleteUserMedia }) {
    const [errorMessage, setErrorMessage] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState()

    const MySwal = withReactContent(Swal)

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleInputChange = (e) => {
        const { value } = e.target
        setFileName(cleanFileName(value))
    }

    const handleImageChange = (e) => {
        setErrorMessage('')
        setFile(e.target.files[0])
        previewFile(e.target.files[0])
    }

    const handleImageDelete = (publicId) => {
        MySwal.fire({
            showCancelButton: true,
            title: 'Are you sure?',
            text: 'You want to delete this image?',
            confirmButtonColor: '#00cdcd',
            confirmButtonText: 'Yes, delete this image!',
            icon: 'question',
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
                deleteUserMedia(publicId)

                MySwal.fire({
                    confirmButtonColor: '#00cdcd',
                    title: 'Your image has been deleted',
                    icon: 'success',
                })
            }
        })
    }

    const handleUploadImage = async (e) => {
        setErrorMessage('')
        e.preventDefault()

        const timeStamp = new Date().getTime()

        if (!previewSource) return

        if (!allowedFileTypeUploads().includes(file.type)) {
            setErrorMessage('Only the allowed file types can be uploaded: png, jpg, jpeg')
            return
        }

        uploadUserMedia(previewSource, `${fileName}-${timeStamp}`)
    }

    const PreviewImage = (
        <div>
            {errorMessage !== '' ? null : (
                <img
                    height="100px"
                    className="img-fluid img-thumbnail mx-auto d-block"
                    src={previewSource}
                    alt="chosen"
                />
            )}
        </div>
    )

    useEffect(() => {
        getUserMedia()
    }, [getUserMedia])

    return (
        <div className="container">
            {userMedia.loading ? (
                <CustomLoader color="white" loaderMessage="Fetching media." />
            ) : (
                <>
                    <nav>
                        <div
                            className="nav nav-tabs rackemm-border-bottom"
                            id="nav-tab"
                            role="tablist"
                        >
                            <button
                                className="nav-link active rackemm-bg-light-gray rounded-0 border-0"
                                id="nav-media-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-media"
                                type="button"
                                role="tab"
                                aria-controls="nav-media"
                                aria-selected="true"
                            >
                                <FaImage /> Media
                            </button>
                            <button
                                className="nav-link border-0 rounded-0"
                                id="nav-upload-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-upload"
                                type="button"
                                role="tab"
                                aria-controls="nav-upload"
                                aria-selected="false"
                            >
                                <FaUpload /> Upload
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="nav-media"
                            role="tabpanel"
                            aria-labelledby="nav-media-tab"
                        >
                            <div className="row">
                                {userMedia.media.map((image) => (
                                    <div className="col-md-4 col-lg-3">
                                        <div key={image._id} className="position-relative my-3">
                                            <a href={image.secureUrl} data-lightbox="photos">
                                                <img
                                                    className="img-fluid"
                                                    alt="rackemm uploaded"
                                                    src={image.secureUrl}
                                                />
                                            </a>
                                            <button
                                                onClick={() => handleImageDelete(image.publicId)}
                                                className="btn btn-outline-danger position-absolute btn-sm"
                                                style={{ bottom: '0', left: '0' }}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-upload"
                            role="tabpanel"
                            aria-labelledby="nav-upload-tab"
                        >
                            <div className="row d-flex flex-row justify-content-center">
                                <div className="col-4">
                                    <form onSubmit={handleUploadImage}>
                                        <div className="card rounded-0 mt-3">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <input
                                                        disabled={userMedia.loading}
                                                        type="file"
                                                        onChange={handleImageChange}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="fileName"
                                                        placeholder="File name"
                                                        onChange={handleInputChange}
                                                        value={fileName}
                                                    />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <button
                                                        disabled={
                                                            userMedia.loading || fileName === ''
                                                        }
                                                        type="submit"
                                                        className="btn btn-outline-secondary form-control"
                                                    >
                                                        {' '}
                                                        <FaUpload /> Upload
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {previewSource && (
                                <div className="row d-flex flex-row justify-content-center mt-3">
                                    <div className="col-4">
                                        {errorMessage && <p>{errorMessage}</p>}
                                        {userMedia.loading ? (
                                            <CustomLoader
                                                color="black"
                                                loaderMessage="Uploading image!"
                                            />
                                        ) : (
                                            PreviewImage
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userMedia: state.userMedia,
})

const mapStateToDispatch = (dispatch) => ({
    uploadUserMedia: (media, fileName) => dispatch(uploadUserMedia(media, fileName)),
    getUserMedia: () => dispatch(getUserMedia()),
    deleteUserMedia: (publicId) => dispatch(deleteUserMedia(publicId)),
})

export default connect(mapStateToProps, mapStateToDispatch)(MediaPage)
