export const defaults={volume:1000000,ticket:80,fraud:1,margin:.8,staff:12};
export const bounds={volume:[10000,10000000],ticket:[1,10000],fraud:[0,20],margin:[0,10],staff:[1,200]};
export const policies=[
{id:'conservative',name:'Conservative',legitAuto:.91,legitReview:.008,legitPass:.85,fraudAuto:.03,fraudReview:.08,fraudPass:.02,tech:0},
{id:'targeted',name:'Targeted review',legitAuto:.94,legitReview:.02,legitPass:.93,fraudAuto:.01,fraudReview:.25,fraudPass:.02,tech:18000},
{id:'growth',name:'Growth first',legitAuto:.975,legitReview:.002,legitPass:.9,fraudAuto:.2,fraudReview:.04,fraudPass:.06,tech:5000}];
export function validate(x){for(const [k,[lo,hi]] of Object.entries(bounds))if(typeof x[k]!=='number'||!Number.isFinite(x[k])||x[k]<lo||x[k]>hi)throw Error(`${k} must be between ${lo} and ${hi}.`);if(!Number.isInteger(x.volume)||!Number.isInteger(x.staff))throw Error('Payment count and team size must be whole numbers.');return x;}
export function calculate(x,p){validate(x);const f=x.volume*x.fraud/100,l=x.volume-f,reviewDemand=l*p.legitReview+f*p.fraudReview,capacity=x.staff*900,coverage=reviewDemand?Math.min(1,capacity/reviewDemand):1;
const legitApproved=l*(p.legitAuto+p.legitReview*p.legitPass*coverage),fraudApproved=f*(p.fraudAuto+p.fraudReview*p.fraudPass*coverage),revenue=legitApproved*x.ticket*x.margin/100,loss=fraudApproved*x.ticket*.8,labor=x.staff*5500,processing=x.volume*.03,contribution=revenue-loss-labor-processing-p.tech;
return {...p,reviewDemand,capacity,coverage,overflow:Math.max(0,reviewDemand-capacity),requiredStaff:Math.ceil(reviewDemand/900),legitApproved,fraudApproved,legitAcceptance:l?legitApproved/l:0,revenue,loss,labor,processing,contribution};}
export const compare=x=>policies.map(p=>calculate(x,p));
