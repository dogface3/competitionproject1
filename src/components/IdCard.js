
const IdCard = ({lastName, firstName, gender, height, birth, picture} ) =>  {
    return (
        <div>
<img src={picture} alt={`kuva`}> 
</img>
<div> <span> First Name:{firstName}</span> </div>
<div> <span> Last Name:{lastName}</span> </div>
<div> <span> Gender:{gender} </span> </div>
<div> <span> Height:{height}</span> </div>
<div> <span> Birth:{height}</span> </div>
</div>
);
};

export default IdCard;