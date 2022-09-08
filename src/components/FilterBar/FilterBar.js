import {StyledFilterBar} from "./FilterBar.styled";

const FilterBar = ({activeFilters, remove, removeFilters}) => {

    return (
        <div>
            <StyledFilterBar>
                <div className={`filter-options`}>
                    <div className={`left-side`}>
                        {
                            activeFilters.map((filter, index) => (
                                <>
                                    <div className={`tag-wrapper`}>
                                        <span className={`filter-item-${index}`} key={index}>{filter}</span>
                                        <button className={`close-tag`} onClick={() => remove(filter)} aria-label="remove">
                                            <img src="/img/icon-remove.svg" alt="" />
                                        </button>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className={`right-side`}>
                        <div onClick={removeFilters} className={`clear`}>clear</div>
                    </div>
                </div>
            </StyledFilterBar>
        </div>
    );
};

export default FilterBar;