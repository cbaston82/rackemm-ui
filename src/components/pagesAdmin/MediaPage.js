import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import Masonry from 'react-masonry-css'
import '../../media.css'
import CustomLoader from '../tables/CustomeLoader'
import { uploadUserMedia, getUserMedia, deleteUserMedia } from '../../redux'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

function MediaPage({ userMedia, uploadUserMedia, getUserMedia, deleteUserMedia }) {
    const [errorMessage, setErrorMessage] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const [file, setFile] = useState()

    const MySwal = withReactContent(Swal)

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
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

        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg']

        if (!previewSource) return

        if (!allowedFileTypes.includes(file.type)) {
            setErrorMessage('Only the allowed file types can be uploaded: png, jpg, jpeg')
            return
        }

        uploadUserMedia(previewSource)
    }

    const items = userMedia.media.map((image) => (
        <div key={image._id} className="item my-3">
            <a href={image.secureUrl} data-lightbox="photos">
                <img className="img-fluid" alt="rackemm uploaded" src={image.secureUrl} />
            </a>
            <button
                onClick={() => handleImageDelete(image.publicId)}
                className="btn btn-danger btn-sm"
            >
                <FaTrash />
            </button>
        </div>
    ))

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

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    }

    useEffect(() => {})

    return (
        <div className="container">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active"
                        id="nav-media-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-media"
                        type="button"
                        role="tab"
                        aria-controls="nav-media"
                        aria-selected="true"
                    >
                        Media
                    </button>
                    <button
                        className="nav-link"
                        id="nav-upload-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-upload"
                        type="button"
                        role="tab"
                        aria-controls="nav-upload"
                        aria-selected="false"
                    >
                        Upload
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
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {items}
                        </Masonry>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-upload"
                    role="tabpanel"
                    aria-labelledby="nav-upload-tab"
                >
                    <div className="intro text-center">
                        <div className="row justify-content-center mt-3">
                            <div className="col-6">
                                <form onSubmit={handleUploadImage}>
                                    <div className="row">
                                        <div className="col-8">
                                            <input
                                                disabled={userMedia.loading}
                                                type="file"
                                                onChange={handleImageChange}
                                                className="form-control"
                                                id="customFile"
                                            />
                                        </div>
                                        <div className="col-4 d-grid gap-2">
                                            <button
                                                disabled={userMedia.loading}
                                                type="submit"
                                                className="btn btn-outline-secondary"
                                            >
                                                {' '}
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {previewSource && (
                                    <div className="row justify-content-center mt-3">
                                        <div className="col">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userMedia: state.userMedia,
})

const mapStateToDispatch = (dispatch) => ({
    uploadUserMedia: (media) => dispatch(uploadUserMedia(media)),
    getUserMedia: () => dispatch(getUserMedia()),
    deleteUserMedia: (publicId) => dispatch(deleteUserMedia(publicId)),
})

export default connect(mapStateToProps, mapStateToDispatch)(MediaPage)
