export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default Name'}</strong>
            <p>{props.repository?.description ?? 'Default Description'}</p>

            <a href={props.repository?.link ?? 'Default Link'}>
                Acessar repostório
            </a>
        </li>
    );
};