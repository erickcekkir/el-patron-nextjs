export default function Tag({ name }) {
    console.log(name);
    const body = (
        <button type="button" className="tag-button">
            {name}
        </button>
    );

    return (
        <li className="tag">{body}</li>
      );
}