import Searchbar from "./Searchbar";

const ListPage = ({ searchResults }) => {
    const results = searchResults.map((el) => (
        <Searchbar key={el.id} post={el} />
    ));

    const content = results?.length ? results : <article><p>No matches</p></article>
    return (
        <main>{content}</main>
    )
}

export default ListPage