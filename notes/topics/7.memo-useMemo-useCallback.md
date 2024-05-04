## Comparision


***Return Value:***
>- memo returns a memoized component.
>- useMemo returns a memoized value.
>- useCallback returns a memoized callback function.

***Usage:***
>- memo is used to memoize the result of a functional component.
>- useMemo is used to memoize values.
>- useCallback is used to memoize callback functions.

***Dependencies:***
>- memo doesn't have a dependency array. It relies on shallow comparison of props.
>- Both useMemo and useCallback accept a dependency array. The memoized value or callback function is recalculated when dependencies change.

***Control Over Rendering:***
>- With memo, you control when a component re-renders based on prop equality.
>- With useMemo and useCallback, you control when values or callbacks are recalculated based on specified dependencies.


***Business Logic:***
memo: Less suitable for complex business logic or data transformations within components.
useMemo and useCallback: More appropriate for memoizing complex calculations or callback functions related to business logic.

***Trade-offs:***
memo can be a quick optimization for preventing re-renders of entire components, but it's less flexible than useMemo and useCallback.
useMemo and useCallback offer more granular control but require careful consideration of dependencies to avoid unnecessary recalculations.