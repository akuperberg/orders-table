import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OrdersTableComponent } from "./orders-table.component";

const expectedData = [
  {
    status: "Active",
    supplierName: "Jakub Zavazal",
    month: "March",
    phase: "Deployment",
    internalOrder: 10024234,
    amount: 5120,
  },
  {
    status: "Active",
    supplierName: "Jonathan Holden",
    month: "April",
    phase: "Research",
    internalOrder: 10024299,
    amount: 6820,
  },
]

describe("OrdersTableComponent", () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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

    const noDataElement = fixture.nativeElement.querySelector('.no-data');
    expect(noDataElement).toBeTruthy();
    expect(noDataElement.textContent).toContain('No data');
  });

  it('should display the correct classes for status highlighting', () => {
    component.filteredData = expectedData;
    fixture.detectChanges();

    const statusCells = fixture.nativeElement.querySelectorAll('.status__highlight');
    expect(statusCells[0].classList).toContain('active');
  });
});
