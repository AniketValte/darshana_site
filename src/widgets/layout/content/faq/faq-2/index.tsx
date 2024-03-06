const FAQ2 = () => {
  return (
    <>
      <div class="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked={true} />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </>
  );
};

export default FAQ2;
