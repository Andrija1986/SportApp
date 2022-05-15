


const DropDown = ({data, select, setSelect}) => {


    const [...dropList] = new Set (data.response.map(item => item.competition));

    const optionList = dropList.map((option, i) => <option key={i} value={option}> {option}</option> )


    return (
        <div>
            <select value={select} onChange= {(e)=> setSelect(e.target.value)}>
                {optionList}
            </select>
        </div>
    )
}

export default DropDown;