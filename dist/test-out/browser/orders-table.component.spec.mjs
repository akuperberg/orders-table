import {
  OrdersTableComponent,
  init_orders_table_component
} from "./chunk-DKKJGVAR.mjs";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-ML4BEKOI.mjs";

// src/app/components/orders-table/orders-table.component.spec.ts
var require_orders_table_component_spec = __commonJS({
  "src/app/components/orders-table/orders-table.component.spec.ts"(exports) {
    init_testing();
    init_orders_table_component();
    var expectedData = [
      {
        status: "Active",
        supplierName: "Jakub Zavazal",
        month: "March",
        phase: "Deployment",
        internalOrder: 10024234,
        amount: 5120
      },
      {
        status: "Active",
        supplierName: "Jonathan Holden",
        month: "April",
        phase: "Research",
        internalOrder: 10024299,
        amount: 6820
      }
    ];
    describe("OrdersTableComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(exports, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [OrdersTableComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(OrdersTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should filter data correctly when checkboxes are changed", () => {
        component.isActive = true;
        component.isPending = false;
        component.isWaiting = false;
        component.filterData();
        expect(component.filteredData).toEqual(expectedData);
      });
      it('should display "No data" when there is no filtered data', () => {
        component.filteredData = [];
        fixture.detectChanges();
        const noDataElement = fixture.nativeElement.querySelector(".no-data");
        expect(noDataElement).toBeTruthy();
        expect(noDataElement.textContent).toContain("No data");
      });
      it("should display the correct classes for status highlighting", () => {
        component.filteredData = expectedData;
        fixture.detectChanges();
        const statusCells = fixture.nativeElement.querySelectorAll(".status__highlight");
        expect(statusCells[0].classList).toContain("active");
      });
    });
  }
});
export default require_orders_table_component_spec();
//# sourceMappingURL=orders-table.component.spec.mjs.map
