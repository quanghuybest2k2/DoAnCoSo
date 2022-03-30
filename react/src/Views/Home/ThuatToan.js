
const ThuatToan = () => {
    const Title = "Thuật Toán Bubble Sort"

    document.title = Title + " - website"
    return (
        <>
            {/* <h1>{Title}</h1> */}
            <h3>Thuật Toán Bubble Sort</h3>
            <br />
            <div class="container">
                <div class="d-flex flex-column">
                    <div class="p-3">
                        <h5>Dữ liệu</h5>
                        <select class="custom-select custom-select-lg">
                            <option value="0"
                                selected="selected"
                                disabled="disabled"
                                hidden="hidden">
                                Chọn Dữ Liệu
                            </option>
                            <option value="1">Chữ</option>
                            <option value="2">Số</option>
                        </select>
                    </div>
                    {/* End Dữ liệu */}
                    <div class="p-3">
                        <h5>Thuật toán</h5>
                        <select class="custom-select custom-select-lg">
                            <option value="0"
                                selected="selected"
                                disabled="disabled"
                                hidden="hidden">
                                Chọn thuật toán
                            </option>
                            <option value="1">Bubble Sort</option>
                            <option value="2">Quick Sort</option>
                        </select>
                    </div>
                    {/* End Thuật toán */}
                    <div class="p-3">
                        <button type="button" class="btn btn-success btn-lg">Bắt đầu</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThuatToan;
