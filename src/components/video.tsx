export default function Video() {
  return (
    <section className="flex justify-center items-center md:py-32 py-20">
      <div className="bg-card rounded-md p-6">
        <video controls autoPlay>
          <source src="demo.mp4" type="video/mp4"/>
        </video>
      </div>
		</section>
  );
}