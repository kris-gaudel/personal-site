import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonBase = styled.div`
    height: 64px;
    width: 64px;
`;
const SocialButton= ({icon, link, size}) => {
    return (
        <ButtonBase>
             <a href={link}>
             <FontAwesomeIcon  opacity={1} color="#E2E6EB"  size={size} icon={icon} />
             </a>
        </ButtonBase>
    );
}

export default SocialButton;
