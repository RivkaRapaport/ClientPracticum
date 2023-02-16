import React, { useRef, useContext } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { userDetailsContext } from './UserDetailsContext';

const Test = () => {
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'details',
        sheet: 'Users'
    })
    const userCtx = useContext(userDetailsContext);


    return (
        <div>
            <div className="alert alert-primary" role="alert" style={{ width: `100vw` }} >
                <p >הפרטים נשלחו בהצלחה
                </p>
                <hr />
            </div>
            <table ref={tableRef}>
                <tbody>
                    <tr>
                        <th> </th>
                        <th>שם</th>
                        <th>תאריך לידה</th>
                        <th>תעודת זהות</th>
                        <th>משפחה</th>
                        <th>קופת חולים</th>
                        <th>מין</th>
                    </tr>
                    <tr>
                        <td>משתמש</td>
                        <td>{userCtx.name}</td>
                        <td>{userCtx.birthDate}</td>
                        <td>{userCtx.id}</td>
                        <td>{userCtx.family}</td>
                        <td>{userCtx.hmo}</td>
                        {userCtx.isMale === true ? <td>'זכר'</td> : <td>נקבה</td>}

                    </tr>
                    {
                        userCtx.childrenArr.map((c, index) =>
                            <tr key={index} >
                                <td>ילד מספר {index + 1}</td>
                                <td>{c.name}</td>
                                <td>{c.birthDate}</td>
                                <td>{c.identity}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button onClick={onDownload} className="btn btn-primary" > הורדה לקובץ exel </button>
        </div>
    );
}


export default Test
