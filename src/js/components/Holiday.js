/**
 * Created by rharik on 5/25/16.
 */


export default (day) => (
    day.holiday ? <div className="holidays">
        <h3>{day.holiday}</h3>
    </div> : null
)
