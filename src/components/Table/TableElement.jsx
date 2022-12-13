import styled from 'styled-components';
import Chair from '../../images/salonChair.png'

export const ReservationContainer = styled.div`
    display: flex;
	width: 100%;
	flex-wrap: wrap;
	font-family:Georgia, 'Times New Roman', Times, serif;
	text-align: center;

    
`;

export const ReservationForm = styled.div`
    background: #181818;
    width: 50%;
    padding: 5rem 7%;

    h1{
        color: #fff;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 500;
    }

    h3{
        color: #cdaa7c;
        text-transform: capitalize;
        font-size: 3rem;
        font-weight: 400;
    }
`;

export const ReservationFormHolder = styled.div`
    display: flex;
	grid-gap: 3rem;
	width: 100%;

    input{
        display: block;
        margin: 2rem 0;
        width: 100%;
        background: none;
        border-bottom: .1rem solid #b7b3b3;
        color: #b7b3b3;
        font-size: 1.8rem;
        font-weight: 300;
    }

    select{
        display: block;
        margin: 2rem 0;
        width: 100%;
        background: none;
        border-bottom: .1rem solid #b7b3b3;
        color: #b7b3b3;
        font-size: 1.8rem;
        font-weight: 300;
    }
`;

export const ReservationImg = styled.div` 
    width: 50%;
    background: url(${Chair});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 9rem;  
`

export const ReservationButton = styled.button`
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #ffc500;
	color: #000;
	transition: 0.2s ease-out;

	&:hover {
		color: #fff;
		background: #e31837;
		transition: 0.2s ease-out;
		cursor: pointer;
	}
`;

