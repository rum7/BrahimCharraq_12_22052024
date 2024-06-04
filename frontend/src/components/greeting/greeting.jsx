export const Greeting = ({ firstname }) => {
    return(
        <div>        
            <h1>Bonjour <span>{firstname}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}