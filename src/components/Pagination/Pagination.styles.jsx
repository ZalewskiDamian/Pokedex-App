import styled from "styled-components";

export const PaginationWrapper = styled.div(
  ({ theme }) => `
        .pagination {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        margin: 5.6rem 0;
        font-family: "Nunito", sans-serif;
      }
      .break {
        padding: 0.8rem;
      }
      .page-item {
        padding: 0.8rem;
      }
      .page-link {
        display: block;
        color: ${theme.colors.black};
        font-size: ${theme.font.paragraph};
        font-weight: ${theme.weight.bold};
        line-height: 1.6rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      .active-link {
        .page-link {
          color: ${theme.colors.fire};
        }
      }
      .page-item.disabled {
        .page-link {
          color: ${theme.colors.gray};
        }
      }
    `
);
