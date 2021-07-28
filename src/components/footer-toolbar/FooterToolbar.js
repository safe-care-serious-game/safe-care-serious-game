import './FooterToolbar.css';

function FooterToolbar(props) {

    return (
        <div className="Footer-Toolbar">
            {props.children}
        </div>
    );
}

export default FooterToolbar;
