// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

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
        }
        #pragma warning restore 1998
#nullable restore
#line 53 "D:\Đồ án cơ sở\DoAnCoSo\DanhGia\Website\Views\Components\Evaluation.razor"
       
    // khai  bao kieu du lieu
    int DuLieu;
    int ThuatToan;


    private async Task Chay()
    {
        string url = null;
        if (DuLieu == 1)
        {
            url = "dulieuchuoi/mangchuoi456kb.txt";
        }
        if (DuLieu == 2)
        {
            url = "dulieuchuoi/dulieuchuoi2MB.txt";
        }
        if (DuLieu == 3)
        {
            url = "dulieuchuoi/mangchuoi3mb.txt";
        }
        if (DuLieu == 4)
        {
            url = "dulieuso/data_s.txt";
        }
        if (DuLieu == 5)
        {
            url = "dulieuso/data_m.txt";
        }
        if (DuLieu == 6)
        {
            url = "dulieuso/data_xl.txt";
        }

        HttpClient client = new HttpClient();
        var response = await client.GetAsync("https://localhost:44328/api/DocFile/" + url);
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
