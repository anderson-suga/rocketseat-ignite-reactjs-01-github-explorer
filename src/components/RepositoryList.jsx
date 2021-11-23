const repositoryName = 'unform2';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Form is React</p>

                    <a href="">
                        Acessar repostório
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Form is React</p>

                    <a href="">
                        Acessar repostório
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Form is React</p>

                    <a href="">
                        Acessar repostório
                    </a>
                </li>
            </ul>
        </section>
    );
};