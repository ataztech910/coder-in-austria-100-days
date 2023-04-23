export default function ModalBackdrop({ children, duration, state, onClick }: any) {
    const defaultStyle = {
        transition: `background-color ${duration}ms ease-in-out, z-index ${duration}ms ease-in-out`,
        backgroundColor: "rgba(0, 0, 0, 0)",
        zIndex: -100
      };
    
    const transitionStyles: any = {
        entering: { backgroundColor: "rgba(0, 0, 0, 0)", zIndex: -100 },
        entered: { backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 100 }
    };

    return(
        <div onClick={onClick}
            className='modalBackdrop'
            style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}
            >
            {children}
    </div>
    );
}