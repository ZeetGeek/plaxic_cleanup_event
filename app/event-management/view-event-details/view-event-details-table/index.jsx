const ViewEventDetailsTable = () => {
    return (
        <div className="layout_box no_padding">
            <table className="w-100">
                <thead>
                    <tr>
                        <th>Volunteer Name</th>
                        <th>Date and Time</th>
                        <th>Location</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>Volunteer 1</span>
                        </td>
                        <td>
                            <span>7/4/204, 12:00am</span>
                        </td>
                        <td>United Statest</td>
                        <td>Lorem ipsum.......</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ViewEventDetailsTable;
