import styled from "styled-components";

export const Card=styled.article` background: #111827;
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 1.4rem;
overflow: hidden;
box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);
transition: 0.3s ease;

&:hover {
    transform: translateY(-10px);
    border-color: rgba(250, 204, 21, 0.55);
}

`;

export const ImageWrapper=styled.div` height: 240px;
overflow: hidden;
`;

export const CardImage=styled.img` width: 100%;
height: 100%;
object-fit: cover;
transition: 0.4s ease;

$ {
    Card
}

:hover & {
    transform: scale(1.08);
}

`;

export const CardContent=styled.div` padding: 1.4rem;
`;

export const CardTitle=styled.h3` font-size: 1.7rem;
margin-bottom: 1rem;
color: #f8fafc;
`;

export const InfoList=styled.div` display: grid;
gap: 0.65rem;
`;

export const InfoItem=styled.div` display: flex;
justify-content: space-between;
gap: 1rem;
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
padding-bottom: 0.55rem;
`;

export const Label=styled.span` color: #94a3b8;
`;

export const Value=styled.span` color: #facc15;
font-weight: 700;
text-align: right;
`;