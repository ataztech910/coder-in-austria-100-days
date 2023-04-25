export default function ModalBackdrop({ children, duration, state, onClick }: any) {
    const defaultStyle = {
        transition: `background-color ${duration}ms ease-in-out, z-index ${duration}ms ease-in-out`,
        backgroundColor: "rgba(0, 0, 0, 0)",
        zIndex: -100,
        display: 'none'
      };
    
    const transitionStyles: any = {
        entering: { backgroundColor: "rgba(0, 0, 0, 0)", zIndex: -100, display: 'block' },
        entered: { backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 100, display: 'block' }
    };

    return(
        <div onClick={onClick}
            style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}
            className='modalBackdrop'
            >
            {children}
    </div>
    );
}