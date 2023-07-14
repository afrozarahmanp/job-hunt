
import { Radar, RadarChart, PolarGrid, Tooltip, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const Statistics = () => {


    const data = [
        {
            subject: "Assignmnent-1",
            A: 29,
            B: 30,
            C: 60
        },
        {
            subject: "Assignmnent-2",
            A: 28,
            B: 30,
            C: 60
        },
        {
            subject: "Assignmnent-3",
            A: 29,
            B: 30,
            C: 60
        },
        {
            subject: "Assignmnent-4",
            A: 25,
            B: 30,
            C: 60
        },
        {
            subject: "Assignmnent-5",
            A: 28,
            B: 30,
            C: 60
        },
        {
            subject: "Assignmnent-6",
            A: 30,
            B: 30,
            C: 60
        },
        {
            subject: "Assignmnent-7",
            A: 30,
            B: 30,
            C: 60
        },
        {
            subject: "Assignmnent-8",
            A: 25,
            B: 30,
            C: 60
        }
    ];


    return (
        <div className=''>
            <h1 className="text-2xl font-semibold my-20 text-center">Assignment Marks</h1>
            <div className='flex flex-col'>
            <RadarChart cx="50%" cy="50%" outerRadius="150" width={1600} height={600} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Tooltip></Tooltip>
                <PolarRadiusAxis angle={30} domain={[0, 60]} />
                <Radar name="Initial Mark" dataKey="C" stroke="#d4a9bb" fill="#d4a9bb" fillOpacity={0.6} />
                <Radar name="Total Mark" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name="Gained mark" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
            </div>




        </div>

    );


}

export default Statistics;