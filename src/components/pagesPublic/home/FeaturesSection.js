import { FaCalendarPlus, FaSearch, FaStar } from 'react-icons/fa'

const features = [
    {
        icon: <FaSearch size={36} />,
        title: 'Find Any Tournament',
        description:
            'Filter through events by location, buy-in, and game type. Spend more time playing and less time searching.',
    },
    {
        icon: <FaCalendarPlus size={36} />,
        title: 'Create Events Quickly',
        description:
            'Easy-to-use forms let you list a tournament in minutes — no back-and-forth, no hassle.',
    },
    {
        icon: <FaStar size={36} />,
        title: 'Ratings & Reviews',
        description:
            "Leave reviews on tournaments you've played. Help the community know which events are worth their time.",
    },
]

function FeaturesSection() {
    return (
        <section className="py-5 rackemm-gradient-black-to-dark-gray">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="text-white fw-bold">Everything you need to stay in the game</h2>
                    <p className="text-white-50">Built by a pool player, for pool players.</p>
                </div>
                <div className="row g-4 justify-content-center">
                    {features.map((feature) => (
                        <div key={feature.title} className="col-sm-12 col-md-4">
                            <div className="text-center p-4 h-100">
                                <div className="rackemm-text-cyan mb-3">{feature.icon}</div>
                                <h5 className="text-white fw-bold mb-2">{feature.title}</h5>
                                <p className="text-white-50 mb-0">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
