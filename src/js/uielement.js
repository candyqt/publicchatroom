import { format } from "date-fns";

export function UiElement(divele){

    const userInfoEle = (data) => {

        const uid = data.uid;
        const email = data.email;
        const fullname = data.displayName;
        const photourl = data.photoURL;
        const createdTime = data.metadata.creationTime;

        // const getdate = new Date(createdTime).getDate();
        // const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        // const getmonth = new Date(createdTime).getMonth();
        // const getyear = new Date(createdTime).getFullYear();
        
        // cdn
        // const formatteddate = dateFns.format(new Date(createdTime),'do MMM yyyy')

        // npm
        const formatteddate = format(new Date(createdTime),'do MMM yyyy')
        // console.log(formatteddate);

        const html = `
                <img src= ${photourl} width="80" alt="profile-icon">
                <p>UID : ${uid}</p>
                <p>Display Name : ${fullname}</p>
                <p>Email :${email} </p>
                <p>Created At : ${formatteddate}</p>
        `;

        divele.innerHTML = html;
    }

    return {userInfoEle}
}