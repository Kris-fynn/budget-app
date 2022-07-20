import '../css/add.css'

function AddItem(){
    return(
        <div>
            <input placeholder="Enter item"/><br/>
            <input placeholder="Enter amount"/><br/>
            <select>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select><br/>
            <button className='button'>Add Item</button><br/>
        </div>
    );
}

export default AddItem;