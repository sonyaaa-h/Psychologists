import Select from "react-select";
import customStyles from "./customStylesSelect";
import s from "./Filter.module.css"

const options = [
    { value: "asc-name", label: "A to Z" },
    { value: "desc-name", label: "Z to A" },
    { value: "asc-price", label: "Low price" },
    { value: "desc-price", label: "High price" },
    { value: "desc-rating", label: "Popular" },
    { value: "asc-rating", label: "Not popular" },
    { value: "asc-all", label: "Show all" },
];

const Filter = ({ selectedOption, onChange }) => {
    return (
        <div>
            <label className={s.filterLabel}>Filters</label>
            <Select
                options={options}
                value={options.find((option) => option.value === selectedOption)}
                onChange={(selectedOption) => onChange(selectedOption.value)}
                styles={customStyles}
                isSearchable={false}
            />
        </div>
    );
};
export default Filter;
