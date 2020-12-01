import './Select.css';

function Select(props) {
  return(
    <div className="Select">
        <select name="sort" id="" onChange={(e) => props.changeSorting(e.target.value)}>
            <option value="default" defaultValue>Сортировать</option>
            <option value="date">По дате</option>
            <option value="alfabet">По алфавиту</option>
        </select>
    </div>
  ) 
}

export default Select;