import './Select.css';

function Select(props) {
  return(
    <div className="Select">
        <select name="sort" onChange={(e) => props.changeSorting(e.target.value)}>
            <option value="default" defaultValue>Сортировать</option>
            <option value="date">По дате</option>
            <option value="alphabet">По алфавиту</option>
        </select>
    </div>
  ) 
}

export default Select;
