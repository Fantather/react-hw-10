import './CurrentLocation.css'

export default function CurrentLocation({title, coordinates})
{
    const {latitude, longitude} = coordinates;
    return(
        <section className='current-location'>
            <h2>
                {title}
            </h2>
            <div>
                <span>
                    <span>Широта</span>
                    <span>{latitude}</span>
                </span>
                <span>
                    <span>Длинна</span>
                    <span>{longitude}</span>
                </span>
            </div>
        </section>
    )
}