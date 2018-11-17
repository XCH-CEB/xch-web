import * as wasm from "xch-wasm";

function update(input) {
    const ans = wasm.balance(input);
    document.getElementById("ans").innerText = ans;
}

$(eqnInput).on('input', function() {
    update($(eqnInput).val());
});


