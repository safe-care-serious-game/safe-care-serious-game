import css from './FooterToolbar.module.css';

function FooterToolbar(props) {

    return (
        <div className={css.footerToolbar}>
            {props.children}
        </div>
    );
}

export default FooterToolbar;
