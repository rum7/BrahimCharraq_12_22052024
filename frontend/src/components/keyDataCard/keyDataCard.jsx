export const KeyDataCard = ({ icon, bgIcon, displayName, value, unit }) => {
    return(
        <div className="blockStat">
            <div className="blockStat__icon" style={{ backgroundColor : bgIcon }}>
                <img src={icon} alt={`icon ${displayName}`} />
            </div>
            <div>
                <h3>{value}{unit}</h3>
                <p>{displayName}</p>
            </div>
        </div>
    )
}