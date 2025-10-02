import "@/pages/components/DiaryPanel/FormForEntries/FormForEntries.css"

export default function FormForEntries() {
  return (
    <div className="form d-flex flex-column gap-2">
      <textarea 
        className="textarea-main" 
        name="entry" 
        id="entry" 
        rows={15} 
        cols={50} 
        placeholder="Enter whatever you want :)">

        </textarea>
      <button className="textarea-btn btn btn-primary">Push</button>
    </div>
  );
}
