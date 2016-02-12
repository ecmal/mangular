
export default `
<data-md-table-pagination md-limit="$ctrl.query.limit" md-page="$ctrl.query.page" md-total="{{$ctrl.desserts.length}}" md-on-paginate="onPaginate" md-page-select></data-md-table-pagination>
`;