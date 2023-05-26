import { HTTP } from 'meteor/http';

function SendSMS (to:string[], content:string, type :number, sender:string ) :string {
    const url="https://api.speedsms.vn/index.php/sms/send";
    const accessToken="UHOyeP5UpU6xZW3GiBwV0pukShWiqPop::x";
    if (to.length<=0) return "";
    if (content==="") return "";
    if (type===3&& sender==="") return "";
    const data={
        to,
        content,
        type,
        sender
    };
    const result = HTTP.post(url, {
        auth: accessToken,
        data,

    });
    return result;
}
export function sendOtp(phonenumber: string, code:string)
{
    const phones = [phonenumber];
    const str = "Ma%20xac%20thuc%20SPEEDSMS%20cua%20ban%20la%20"+code;
    SendSMS(phones,str,3,"SPEEDSMS");
}