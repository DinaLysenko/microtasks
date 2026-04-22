type Props={
    topCars: Cars[];
}
type Cars={
    manufacturer: string,
    model: string
}
export const TopCars=({topCars}:Props)=>{
    return (
        <>
            <thead>
            <tr>
                <th>Number</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>

                {
                    topCars.map((topCar, index) => {
                        return (
                            <tr key={index} >
                                <th >{index+1}</th>
                                <td style={{padding: '20px'}}>{topCar.manufacturer}</td>
                                <td>{topCar.model}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </>

    )
}