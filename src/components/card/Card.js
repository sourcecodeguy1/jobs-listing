import {StyledCard} from './Card.styled';

const Card = ({job, setActiveFilters, activeFilters}) => {

    const handleClick = tag => {
        if (activeFilters.includes(tag)) {
            return;
        }
        setActiveFilters(prevState => [...prevState, tag]);
    };

    const {
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    } = job;

    const tags = [role, level, ...languages, ...tools];

    return (
        <>
            <div className={`card-container`}>
                <StyledCard>
                    <div className={`left-content`}>
                        <img src={logo} alt=""/>
                        <div>
                            <div className="name-tags"><h1>{company}</h1></div>
                            <h2>{position}</h2>
                            <div className="job-details">
                                <span>{postedAt}</span>•<span>{contract}</span>•<span>{location}</span>
                            </div>
                        </div>
                    </div>
                        <div className="right-content">
                            {tags.map(tag => (
                                <div className={`tag`}>
                                    <span className={``} onClick={() => handleClick(tag)}>{tag}</span>
                                </div>
                            ))}
                        </div>

                </StyledCard>
            </div>
        </>
    );
};

export default Card;