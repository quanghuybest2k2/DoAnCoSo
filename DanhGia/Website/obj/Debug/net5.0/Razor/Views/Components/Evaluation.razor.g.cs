#pragma checksum "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d90a374241a67f639c4acdae91823649a26e3834"
// <auto-generated/>
#pragma warning disable 1591
namespace WebsiteBlazor.Views.Components
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 2 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\_Imports.razor"
using WebsiteBlazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor"
using System.Diagnostics;

#line default
#line hidden
#nullable disable
    public partial class Evaluation : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<h3>Đánh giá hiệu năng giữa JavaScript và C Sharp</h3>\r\n<br>\r\n");
            __builder.OpenElement(1, "div");
            __builder.AddAttribute(2, "class", "container");
            __builder.OpenElement(3, "div");
            __builder.AddAttribute(4, "class", "d-flex flex-column");
            __builder.OpenElement(5, "div");
            __builder.AddAttribute(6, "class", "p-3");
            __builder.AddMarkupContent(7, "<h5>Dữ liệu</h5>\r\n            ");
            __builder.OpenElement(8, "select");
            __builder.AddAttribute(9, "class", "custom-select custom-select-lg");
            __builder.AddAttribute(10, "id", "dulieu");
            __builder.AddAttribute(11, "value", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 11 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor"
                                                                  DuLieu

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(12, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => DuLieu = __value, DuLieu));
            __builder.SetUpdatesAttributeName("value");
            __builder.OpenElement(13, "option");
            __builder.AddAttribute(14, "value", "0");
            __builder.AddAttribute(15, "selected", "selected");
            __builder.AddAttribute(16, "disabled", "disabled");
            __builder.AddAttribute(17, "hidden", "hidden");
            __builder.AddMarkupContent(18, "\r\n                    Chọn Dữ liệu\r\n                ");
            __builder.CloseElement();
            __builder.AddMarkupContent(19, "\r\n                ");
            __builder.OpenElement(20, "option");
            __builder.AddAttribute(21, "value", "1");
            __builder.AddMarkupContent(22, "Dữ liệu chuỗi 113KB");
            __builder.CloseElement();
            __builder.AddMarkupContent(23, "\r\n                ");
            __builder.OpenElement(24, "option");
            __builder.AddAttribute(25, "value", "2");
            __builder.AddMarkupContent(26, "Dữ liệu chuỗi 3MB");
            __builder.CloseElement();
            __builder.AddMarkupContent(27, "\r\n                ");
            __builder.OpenElement(28, "option");
            __builder.AddAttribute(29, "value", "3");
            __builder.AddMarkupContent(30, "Dữ liệu số size S");
            __builder.CloseElement();
            __builder.AddMarkupContent(31, "\r\n                ");
            __builder.OpenElement(32, "option");
            __builder.AddAttribute(33, "value", "4");
            __builder.AddMarkupContent(34, "Dữ liệu số size M");
            __builder.CloseElement();
            __builder.AddMarkupContent(35, "\r\n                ");
            __builder.OpenElement(36, "option");
            __builder.AddAttribute(37, "value", "5");
            __builder.AddMarkupContent(38, "Dữ liệu số size XL");
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(39, "\r\n        ");
            __builder.OpenElement(40, "div");
            __builder.AddAttribute(41, "class", "p-3");
            __builder.AddMarkupContent(42, "<h5>Thuật toán</h5>\r\n            ");
            __builder.OpenElement(43, "select");
            __builder.AddAttribute(44, "class", "custom-select custom-select-lg");
            __builder.AddAttribute(45, "id", "thuattoan");
            __builder.AddAttribute(46, "value", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 28 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor"
                                                                  ThuatToan

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(47, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => ThuatToan = __value, ThuatToan));
            __builder.SetUpdatesAttributeName("value");
            __builder.OpenElement(48, "option");
            __builder.AddAttribute(49, "value", "0");
            __builder.AddAttribute(50, "selected", "selected");
            __builder.AddAttribute(51, "disabled", "disabled");
            __builder.AddAttribute(52, "hidden", "hidden");
            __builder.AddMarkupContent(53, "\r\n                    Chọn thuật toán\r\n                ");
            __builder.CloseElement();
            __builder.AddMarkupContent(54, "\r\n                ");
            __builder.OpenElement(55, "option");
            __builder.AddAttribute(56, "value", "1");
            __builder.AddContent(57, "Bubble Sort");
            __builder.CloseElement();
            __builder.AddMarkupContent(58, "\r\n                ");
            __builder.OpenElement(59, "option");
            __builder.AddAttribute(60, "value", "2");
            __builder.AddContent(61, "Selection Sort");
            __builder.CloseElement();
            __builder.AddMarkupContent(62, "\r\n                ");
            __builder.OpenElement(63, "option");
            __builder.AddAttribute(64, "value", "3");
            __builder.AddContent(65, "Insertion Sort");
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(66, "\r\n        ");
            __builder.OpenElement(67, "div");
            __builder.AddAttribute(68, "class", "p-3");
            __builder.OpenElement(69, "button");
            __builder.AddAttribute(70, "type", "button");
            __builder.AddAttribute(71, "class", "btn btn-success btn-lg");
            __builder.AddAttribute(72, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 42 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor"
                                                                           Chay

#line default
#line hidden
#nullable disable
            ));
            __builder.AddMarkupContent(73, "Nút C#");
            __builder.CloseElement();
            __builder.AddMarkupContent(74, "\r\n            ");
            __builder.AddMarkupContent(75, "<button type=\"button\" class=\"btn btn-success btn-lg\" onclick=\"Chay()\">Nút JS</button>");
            __builder.CloseElement();
            __builder.AddMarkupContent(76, "\r\n        ");
            __builder.AddMarkupContent(77, "<div class=\"spinner-border\" role=\"status\" style=\"display:none;\" id=\"spinner\"><span class=\"sr-only\">Loading...</span></div>");
            __builder.CloseElement();
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 52 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor"
       
    // khai  bao kieu du lieu
    int DuLieu;
    int ThuatToan;

    private async Task Chay()
    {
        HttpClient client = new HttpClient();
        var response = await client.GetAsync("https://localhost:44328/api/DocFile/dulieuso/data_s.txt");
        string content = await response.Content.ReadAsStringAsync();

        String[] arr = content.Split("\n");
        long[] arr_so = Array.ConvertAll(arr, s => long.Parse(s));
        if (ThuatToan == 1)
        {
            long time_bbsort = ExecutionTime(() => bubbleSort_so(arr_so));
            await JS.InvokeVoidAsync("ShowLog", "Thời gian chạy thuật toán Bubble Sort C# là: " + time_bbsort + " ms");
        }
        if (ThuatToan == 2)
        {
            long time_slsort = ExecutionTime(() => selection_sort(arr_so));
            await JS.InvokeVoidAsync("ShowLog", "Thời gian chạy thuật toán Selection Sort C# là: " + time_slsort + " ms");
        }
        if (ThuatToan == 3)
        {
            long time_InsertionSort = ExecutionTime(() => InsertionSort(arr_so));
            await JS.InvokeVoidAsync("ShowLog", "Thời gian chạy thuật toán Insertion Sort C# là: " + time_InsertionSort + " ms");
        }

    }

    private static void bubbleSort_chuoi(string[] arr)
    {
        string temp;
        // Sorting strings using bubble sort
        for (int i = 0; i < arr.Length; i++)
        {
            for (int j = 0; j < (arr.Length - i - 1); j++)
            {
                if (SoSanh(arr[j], arr[j + 1]) > 0)
                {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    }
    private static void bubbleSort_so(long[] arr)
    {
        long temp;
        // Sorting strings using bubble sort
        for (int i = 0; i < arr.Length; i++)
        {
            for (int j = 0; j < (arr.Length - i - 1); j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    }
    //Selection Sort
    private static void selection_sort(long[] arr)
    {

        // One by one move boundary of unsorted subarray
        for (int i = 0; i < arr.Length - 1; i++)
        {
            // Find the minimum element in unsorted array
            int min_idx = i;
            for (int j = i + 1; j < arr.Length; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;

            // Swap the found minimum element with the first
            // element
            long temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
    //end Selection Sort
    //Insertion Sort
    void InsertionSort(long[] arr)
    {
        for (int i = 1; i < arr.Length; i++)
        {
            long key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key)
            {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    // End Insertion Sort

    private long ExecutionTime(Action function)
    {
        Stopwatch stopwatch = Stopwatch.StartNew();
        function();
        stopwatch.Stop();
        return stopwatch.ElapsedMilliseconds;
    }


    private static int SoSanh(string a, string b)
    {
        return a.ToString().ToLower().CompareTo(b.ToString().ToLower());
    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JS { get; set; }
    }
}
#pragma warning restore 1591
