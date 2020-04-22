import ContentLoader from './node_modules/react-content-loader';

export const ProfilePlaceholder = () => {
    return (
        <ContentLoader 
            speed={2}
            width={600}
            height={400}
            viewBox="0 0 600 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="50" y="250" rx="3" ry="3" width="500" height="6" /> 
            <rect x="50" y="272" rx="3" ry="3" width="430" height="6" /> 
            <rect x="50" y="288" rx="3" ry="3" width="480" height="6" /> 
            <circle cx="300" cy="110" r="100" />
        </ContentLoader>
    )
}
