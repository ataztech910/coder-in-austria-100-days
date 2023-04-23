import styles from '@/app/ui/molecules/sidebar.module.scss';

export default function SidebarLayout({ children, duration, state }: any) {
    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out`,
        transform: "translateX(-101%)"
      };
    
      const transitionStyles: any = {
        entering: { transform: "translateX(-101%)" },
        entered: { transform: "translateX(0)" }
      };
      return (
        <div
          className={styles.sidebar__layout__menu}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {children}
        </div>
      );
}