

function Input() {
  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom"
      />

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note"
      />

      <button onClick={ajouter}>
        Ajouter
      </button>
    </div>
  );
}

export default Input;