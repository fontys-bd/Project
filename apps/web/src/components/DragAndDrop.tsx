import Image from "next/image";
export default function DragAndDrop() {
  return (
    <div className="pt-5">
      {/* <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer">
              <p className=" flex items-center justify-center bg-white text-[12px] text-red-500">
                {message}
              </p>
              <div className="relative h-24 ">
                <input
                  type="file"
                  onChange={handleFile}
                  className="h-full w-full opacity-0 z-10 absolute"
                  name="files[]"
                />
                <div className=" justify-center bg-slate-50">
                  <div className="flex flex-col">
                    <p className="text-xl">
                      Drag images here or click to select files
                    </p>
                    <p className="text-sm">
                      Attach as many files as you like, each file should npt
                      exceed 5mb
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex ">
                {files.map((file, key) => {
                  return (
                    <div
                      key={key}
                      className="flex h-16 w-full items-center justify-between rounded bg-white p-3"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div className="h-16 w-16 ">
                          <Image
                            alt="Your image with name: {file.name}"
                            className="h-full w-full "
                            src={URL.createObjectURL(file)}
                            width={500}
                            height={500}
                          />
                        </div>
                        <span className="w-44 truncate">{file.name}</span>
                      </div>
                      <div
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm bg-red-400"
                      >
                        <i className="mdi mdi-trash-can text-[14px] text-white"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
    </div>
  );
}
