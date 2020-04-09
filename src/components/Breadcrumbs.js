import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
// import { connect } from 'react-redux';

const UserBreadcrumb = ({ match }) =>
  <span>{match.params.id}</span>; // use match param userId to fetch/display user name

const routes = [
  { path: 'categories/', breadcrumb: '' },
  { path: 'categories/:id', breadcrumb: UserBreadcrumb},
  { path: 'something-else', breadcrumb: ':)' },
];

const Breadcrumbs = ({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map(({ breadcrumb, path, match }) => (
      <span key={path}>
        <NavLink to={match.url}>
          {breadcrumb}
        </NavLink>
        <span>/</span>
      </span>
    ))}
  </div>
);



// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchSubCategory: (categoryId, subCategoryId) => dispatch( actions.fetchSubCategory( categoryId,subCategoryId ) )
//     };
// };

// export default withRouter(connect( mapStateToProps, mapDispatchToProps )( SubCategoryDetails )) ;

// export default withBreadcrumbs(routes)(Breadcrumbs);


export default   withBreadcrumbs (routes)(Breadcrumbs);