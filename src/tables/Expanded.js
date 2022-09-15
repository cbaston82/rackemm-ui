const Expanded = ({ data }) => {
    return (
        <div className="card" style={{ borderRadius: '0' }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 col-lg-12 ">
                        <span className="fw-light text-black-50">{data.description}</span>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <a
                            type="button"
                            className="btn btn-sm btn-outline-warning mt-3"
                            href={`${
                                data.type === 'weekly-event' ? '/weekly-event/' : '/yearly-event/'
                            }${data._id}`}
                        >
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expanded
