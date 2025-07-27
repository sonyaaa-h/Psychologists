const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: "14px",
        backgroundColor: "#54BE96",
        border: "none",
        padding: "0 18px",
        boxShadow: "none",
        color: " #fbfbfb",
        fontWeight: 500,
        fontSize: "16px",
        cursor: "pointer",
        width: "226px",
        marginTop: "8px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: " #fbfbfb",
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "14px",
        padding: "14px 0 14px 18px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: "transparent",
        color: state.isSelected
            ? "#191a15" 
            : state.isFocused
                ? "#191a15"
                : "rgba(25, 26, 21, 0.3)", 
        fontSize: "16px",
        fontWeight: 400,
        cursor: "pointer",
        padding: "10px 16px",
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: "#fbfbfb",
        padding: 0,
        transition: "transform 0.3s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        ":hover": {
            color: "#fbfbfb", 
        },
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
};

export default customStyles;
